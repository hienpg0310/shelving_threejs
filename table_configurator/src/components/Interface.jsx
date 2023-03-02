import {Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Slider, Stack, Typography} from "@mui/material";


import { useConfigurator } from "../contexts/Configurator";

export const Interface = () => {
  // const { tableWidth, setTableWidth, legs, setLegs, legsColor, setLegsColor, plateColor, setPlateColor } =
  //   useConfigurator();

    const { shelfColor, setShelfColor } = useConfigurator();
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
      }}
      p={3}
    >
      <Stack spacing={3}>
        <Typography variant="caption">Shelf Configurator</Typography>
        {/* <Box className="glass" p={3}>
          <FormControl>
            <FormLabel>Shelf height</FormLabel>
            <Slider
              sx={{
                width: "200px",
              }}
              min={50}
              max={200}
              value={tableWidth}
              onChange={(e) => setTableWidth(e.target.value)}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Box> */}

        {/* <Box className="glass" p={3}>
          <FormControl>
            <FormLabel>Table Thickness</FormLabel>
            <Slider
              sx={{
                width: "200px",
              }}
              min={10}
              max={40}
              value={tableWidth}
              onChange={(e) => setTableWidth(e.target.value)}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Box> */}
        
        {/* <Box className="glass" p={3}>
          <FormControl>
            <FormLabel>Legs Layout</FormLabel>
            <RadioGroup
              value={legs}
              onChange={(e) => setLegs(parseInt(e.target.value))}
            >
              <FormControlLabel
                value={0}
                control={<Radio />}
                label="Standard"
              />
              <FormControlLabel value={1} control={<Radio />} label="Solid" />
              <FormControlLabel value={2} control={<Radio />} label="Design" />
            </RadioGroup>
          </FormControl>
        </Box> */}
        <Box className="glass" p={3}>
          <FormControl>
            <FormLabel>Shelf Color</FormLabel>
            <RadioGroup
              value={shelfColor}
              onChange={(e) => setShelfColor(e.target.value)}
            >
              <FormControlLabel
                value={"#1e1e1e"}
                control={<Radio />}
                label="Brown"
              />
              <FormControlLabel
                value={"#ECECEC"}
                control={<Radio />}
                label="White"
              />
              <FormControlLabel
                value={"#C9BD71"}
                control={<Radio />}
                label="Cream"
              />
              {/* <FormControlLabel
                value={"#C9A3B9"}
                control={<Radio />}
                label="Pink Gold"
              /> */}
            </RadioGroup>
          </FormControl>
        </Box>
        {/* <Box className="glass" p={3}>
          <FormControl>
            <FormLabel>Plate Color</FormLabel>
            <RadioGroup
              value={plateColor}
              onChange={(e) => setPlateColor(e.target.value)}
            >
              <FormControlLabel
                value={"#ECECEC"}
                control={<Radio />}
                label="Wood"
              />
              <FormControlLabel
                value={"#777777"}
                control={<Radio />}
                label="Black"
              />
              <FormControlLabel
                value={"#C9A3B9"}
                control={<Radio />}
                label="Pink Gold"
              />
            </RadioGroup>
          </FormControl>
        </Box> */}
      </Stack>
    </Box>
  );
};
