const headroom = {
  width: "100%",
  margin: "0px auto",
  padding: "0px 2rem",
  paddingTop: "2em",
  boxShadow: `0 3px 6px ${props => props.theme.color.black.primary}, 0 3px 6px ${props => props.theme.color.black.secondary}`,
  zIndex: "20",
  backgroundColor: `${props => props.theme.color.black.primary}`
};

export { headroom };
