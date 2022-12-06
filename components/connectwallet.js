import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../styles/Header.module.css";

export default function Connectwallet() {
  return (
    <div>
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks
          const ready = mounted && authenticationStatus !== "loading";
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === "authenticated");

          return (
            <div
              {...(!ready && {
                "aria-hidden": true,
                style: {
                  opacity: 0,
                  pointerEvents: "none",
                  userSelect: "none",
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <div>
                      <button
                        onClick={openConnectModal}
                        className={styles.bottomconnect}
                        type="button"
                      >
                        <img
                          src="connectimg.png"
                          className={styles.bottomconnectimg}
                        ></img>
                      </button>
                    </div>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <div
                      className={styles.wrongnetworkr}
                      style={{ fontWeight: "1000", display: "flex" }}
                    >
                      <button
                        onClick={openChainModal}
                        type="button"
                        className={styles.wrongnetworky}
                        style={{
                          fontWeight: "900",
                          display: "flex",
                          justifyContent: "center",
                          fontSize: "15px",
                          color: "orangered",
                          cursor: "pointer",
                        }}
                      >
                        Wrong network
                      </button>
                    </div>
                  );
                }

                return (
                  <div style={{ display: "flex", gap: 12, fontWeight: "1000" }}>
                    <div className={styles.chainbuttomr}>
                      <button
                        onClick={openChainModal}
                        className={styles.chainbuttomy}
                        type="button"
                        style={{
                          fontWeight: "900",
                          display: "flex",
                          justifyContent: "center",
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        {chain.hasIcon && (
                          <div
                            style={{
                              background: chain.iconBackground,
                              width: 12,
                              height: 12,
                              borderRadius: 999,
                              overflow: "hidden",
                              marginRight: 4,
                            }}
                          >
                            {chain.iconUrl && (
                              <img
                                alt={chain.name ?? "Chain icon"}
                                src={chain.iconUrl}
                                style={{
                                  width: 12,
                                  height: 12,
                                  alignItems: "center",
                                  display: "flex",
                                }}
                              />
                            )}
                          </div>
                        )}
                        {chain.name}
                      </button>
                    </div>

                    <div
                      className={styles.addressbuttomr}
                      style={{ fontWeight: "900", display: "flex" }}
                    >
                      <button
                        onClick={openAccountModal}
                        type="button"
                        className={styles.addressbuttomy}
                        style={{
                          fontWeight: "900",
                          display: "flex",
                          color: "white",
                          justifyContent: "center",
                          fontSize: "15px",
                          cursor: "pointer",
                        }}
                      >
                        {account.displayName}
                        {/* {account.displayBalance
                          ? ` (${account.displayBalance})`
                          : ""} */}
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
    </div>
  );
}
