const MovieHorizListStyle = {
  height: "100%",
  width: "100%",
  color: "white",
  backgroundColor: "black",
  display: "flex",
  justifyContent: "center",
};

const MovieTileStyle = {
  width: "calc(100vw / 10 - 20px)",
  height: "calc(100vh * 0.3 * 0.9)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "10px",
  paddingTop: "25px",
  cursor: "pointer",
  overflow: "hidden",
};
const MovieTileChosenStyle = {
  width: "calc(100vw / 10 - 20px)",
  height: "calc(100vh * 0.3 * 0.9)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "10px",
  cursor: "pointer",
  overflow: "hidden",
};

export { MovieHorizListStyle, MovieTileStyle, MovieTileChosenStyle };
