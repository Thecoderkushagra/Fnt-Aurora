const Logo = () => {

  const styles = {
    body: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      fontFamily: "'Urbanist', sans-serif"
    },
    logo: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      letterSpacing: '2px',
      userSelect: 'none'
    },
    outer: {
      fontSize: '38px',
      fontWeight: 800,
      color: '#f3f2f2',
      letterSpacing: '3px',
      display: 'flex',
      justifyContent: 'flex-start'
    },
    aurora: {
      fontSize: '38px',
      fontWeight: 800,
      background: 'linear-gradient(90deg, #00d4ff, #007bffff)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textShadow: '0 0 18px rgba(50, 118, 255, 0.4)'
    },
    stream: {
      fontSize: '18px',
      fontWeight: 600,
      color: '#d6d6d6',
      letterSpacing: '3px',
      display: 'flex',
      marginTop: '-6px',
      alignSelf: 'flex-end'
    },
    streamSpan: {
      color: '#007bffff'
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.logo}>
        <span style={styles.outer}>
          A<span style={styles.aurora}>uror</span>a
        </span>
        <span style={styles.stream}>
          <span style={styles.streamSpan}>STREA</span>M|
        </span>
      </div>
    </div>
  );
}
export default Logo;