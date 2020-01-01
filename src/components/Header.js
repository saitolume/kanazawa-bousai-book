'use strict'

const headerStyles = {
  wrapper: {
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px #00000025',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-between',
    height: '64px',
    padding: '16px',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw'
  },
  bookIcon: {
    marginRight: '8px'
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: 'auto 0'
  },
  buttonList: {
    display: 'flex'
  },
  iconButton: {
    borderRadius: '50%',
    display: 'flex',
    margin: 'auto 0 auto 8px',
    width: '32px',
    height: '32px'
  },
  icon: {
    margin: 'auto'
  }
}

const Header = ({ onClickSyncButton, style }) => {
  return (
    <div style={{ ...headerStyles.wrapper, ...style }}>
      <a href="/index.html" style={headerStyles.title}>
        <i className="fas fa-book" style={headerStyles.bookIcon}></i>
        金沢防災ブック
      </a>
      <div style={headerStyles.buttonList}>
        <div style={headerStyles.iconButton}>
          <i className="fas fa-star" style={headerStyles.icon}></i>
        </div>
        <div style={headerStyles.iconButton} onClick={onClickSyncButton}>
          <i className="fas fa-sync" style={headerStyles.icon}></i>
        </div>
      </div>
    </div>
  )
}
