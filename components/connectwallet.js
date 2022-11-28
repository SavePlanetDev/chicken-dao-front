import { ConnectButton } from '@rainbow-me/rainbowkit';


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
                    const ready = mounted && authenticationStatus !== 'loading';
                    const connected =
                              ready &&
                              account &&
                              chain &&
                              (!authenticationStatus ||
                              authenticationStatus === 'authenticated');

                    return (
                              <div
                              {...(!ready && {
                              'aria-hidden': true,
                              'style': {
                              opacity: 0,
                              pointerEvents: 'none',
                              userSelect: 'none',
                              },
                              })}
                              >
                              {(() => {
                              if (!connected) {
                              return (
                                        <div>
                                                  <button onClick={openConnectModal} style={{ display: 'absolute', alignItems: 'center' ,background: 'none',borderStyle: 'none',top:'24px', right:'0', position:'absolute'}} type="button">
                                                  <img src="connectimg.png" width="150px"></img>
                                                  </button>
                                        </div>
                              
                              );
                              }

                              if (chain.unsupported) {
                              return (
                              <div style={{ display: 'revert', alignItems: 'center',background:'#F02D2D' , height:'60px', width:'130px',filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',right:'10px', position:'absolute',top:'7%'}}>
                              <button onClick={openChainModal} type="button" style={{ display: 'flex', alignItems: 'center',background:'#FFBE3E',height:'60px', width:'130px',right:'6px',position:'absolute',top:'-6px', borderStyle: 'none' }}>
                                        Wrong network
                              </button>
                              </div>
                              );
                              }

                              return (
                              <div style={{ display: 'flex', gap: 12 }}>
                              <div style={{ display: 'revert', alignItems: 'center',background:'#F02D2D' , height:'60px', width:'130px',filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',right:'160px', position:'absolute',top:'7%'}}>
                              <button
                                        onClick={openChainModal}
                                        style={{ display: 'flex', alignItems: 'center',background:'#FFBE3E',height:'60px', width:'130px',right:'6px',position:'absolute',top:'-6px', borderStyle: 'none' }}
                                        type="button"
                              >
                                        {chain.hasIcon && (
                                        <div
                                        style={{
                                        
                                        background: chain.iconBackground,
                                        width: 12,
                                        height: 12,
                                        borderRadius: 999,
                                        overflow: 'hidden',
                                        marginRight: 4,
                                        
                                        }}
                                        >
                                        {chain.iconUrl && (
                                        <img
                                        alt={chain.name ?? 'Chain icon'}
                                        src={chain.iconUrl}
                                        style={{ width: 12, height: 12 ,alignItems: 'center'}}
                                        />
                                        )}
                                        </div>
                                        )}
                                        {chain.name}
                              </button>
                              </div>
                              
                              <div style={{ display: 'revert', alignItems: 'center',background:'#F02D2D' , height:'60px', width:'130px',filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',right:'10px', position:'absolute',top:'7%'}}>
                              <button onClick={openAccountModal} type="button" style={{ display: 'flex', alignItems: 'center',background:'#FFBE3E',height:'60px', width:'130px',right:'6px',position:'absolute',top:'-6px', borderStyle: 'none' }}>
                                        {account.displayName}
                                        {account.displayBalance
                                        ? ` (${account.displayBalance})`
                                        : ''}
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
          )
        }