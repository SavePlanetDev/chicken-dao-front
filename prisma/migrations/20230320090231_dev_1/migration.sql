-- CreateTable
CREATE TABLE "Project" (
    "address" TEXT NOT NULL PRIMARY KEY,
    "ownerId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "logoUrl" TEXT NOT NULL DEFAULT 'na',
    "avatarUrl" TEXT NOT NULL DEFAULT 'na',
    "likes" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    CONSTRAINT "Project_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("address") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "projectId" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    CONSTRAINT "Comment_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("address") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "address" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT 'na',
    "avatarUrl" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'USER'
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_address_key" ON "Project"("address");

-- CreateIndex
CREATE UNIQUE INDEX "User_address_key" ON "User"("address");
