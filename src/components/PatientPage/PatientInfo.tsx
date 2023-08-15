import Button from "@mui/material/Button";
import { Box, Typography, Paper, useMediaQuery } from "@mui/material";
import useData from "../../hooks/useData";
import Info from "../Info";
import { UserInfoData } from "../../types";
const PatientInfo = () => {
  const { data: userData } = useData<UserInfoData>("/data/user.json");
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  if (!userData) return null;
  return (
    <Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between" }}
        flexDirection={{ xs: "column", md: "row" }}
        mb={4}>
        <Typography variant="h5" fontWeight={700}>
          Patient
        </Typography>
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }}>
          <Button variant="contained" sx={{ margin: "0.5rem", fontSize: 12 }}>
            Send Zugangscode
          </Button>
          <Button variant="contained" sx={{ margin: "0.5rem", fontSize: 12 }}>
            Send reset password email
          </Button>
          <Button
            variant="contained"
            sx={{ background: "red", margin: "0.5rem", fontSize: 12 }}>
            Block Account
          </Button>
        </Box>
      </Box>
      <Paper sx={{ padding: "10px 20px" }}>
        <Box
          display="flex"
          flexDirection={isSmallScreen ? "column" : "row"}
          justifyContent={isSmallScreen ? "center" : undefined}
          rowGap={4}>
          <Box flexBasis="33%">
            <Box textAlign="center" mb={2}>
              <img
                src={userData?.user.img}
                alt="Patient"
                width={100}
                height={100}
              />
              <Typography
                variant="h5"
                sx={{
                  fontSize: 15,
                  fontWeight: "bold",
                }}>
                {userData?.user.username}
              </Typography>
            </Box>
            <Info title="Email" info={userData.user.email} />
            <Info title="Phone" info={userData?.user.phone} />
            <Info title="Birth Date" info={userData?.user.birthDate} />
            <Info title="Languages" info={userData?.user.languages} />
          </Box>
          <Box flexBasis="33%">
            <Typography
              variant="h5"
              sx={{
                fontSize: 16,
                fontWeight: "bold",
              }}>
              Operation
            </Typography>
            <Info title="Op.Date" info={userData?.operation.opData} />
            <Info title="Method" info={userData?.operation.method} />
            <Info
              title="Treatment Area:"
              info={userData.operation.treatmentArea}
            />
            <Info title=" Grafts" info={userData.operation.graft} />
            <Typography
              variant="h5"
              sx={{
                fontSize: 15,
                fontWeight: "bold",
              }}
              mt={2}>
              Flight
            </Typography>
            <Info title=" Arrival" info={userData.flight.arrival} />
            <Info title="Departure" info={userData.flight.depature} />
          </Box>
          <Box flexBasis="33%">
            <Typography
              variant="h5"
              sx={{
                fontSize: 15,
                fontWeight: "bold",
              }}>
              Status
            </Typography>
            <Info title="Phase" info={userData.status.phase} />
            <Info title="Tasks" info={userData.status.tasks} />
            <Info title="LastUpload" info={userData.status.lastUpload} />
            <Typography
              variant="h5"
              sx={{
                fontSize: 15,
                fontWeight: "bold",
              }}
              mt={5}>
              App Usage
            </Typography>
            <Info title="Last Login" info={userData.usage.lastLogin} />
            <Info
              title="Registration Code"
              info={userData.usage.registrationCode}
            />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default PatientInfo;
