import { CircularProgress } from "@mui/material";
import { Grid2 } from "@mui/material/Unstable_Grid2"; // Asegúrate de importar el grid correctamente.

function CheckingAuth() {
  return (
    <Grid2
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ 
        minHeight: "100vh", 
        backgroundColor: "#101011", // Fondo personalizado
        padding: 4 
      }}
    >
      <Grid2
        container
        direction="row"
        justifyContent="center"
        sx={{
          width: { sm: 450 },
        }}
      >
        <CircularProgress 
          sx={{ color: "#f59e0b" }} // bg-amber-600 traducido a su equivalente en HEX
        />
      </Grid2>
    </Grid2>
  );
}

export default CheckingAuth;