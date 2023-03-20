-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "address" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT 'your nft name',
    "ownerId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "logoUrl" TEXT DEFAULT 'na',
    "avatarUrl" TEXT DEFAULT 'na',
    "websiteUrl" TEXT,
    "facebookUrl" TEXT,
    "discordUrl" TEXT,
    "discordInviteUrl" TEXT,
    "twitterUrl" TEXT,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    CONSTRAINT "Project_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("address") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Project" ("address", "avatarUrl", "createdAt", "description", "likes", "logoUrl", "ownerId", "updatedAt") SELECT "address", "avatarUrl", "createdAt", "description", "likes", "logoUrl", "ownerId", "updatedAt" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
CREATE UNIQUE INDEX "Project_address_key" ON "Project"("address");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
