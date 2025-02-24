function Footer() {
  return (
    <footer style={styles} onClick={() => console.log("Footer clicked")}>
      <a href="">Terms</a>
      <a href="">LinkedIn</a>
    </footer>
  );
}

const styles = {
  display: "flex",
  justifyContent: "space-between",
  padding: "1rem",
};

export default Footer;
