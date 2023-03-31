import {Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Slider, Stack, Typography} from "@mui/material";


import { useConfigurator } from "../contexts/Configurator";

export const Interface = () => {

    const { tuColor, setTuColor } = useConfigurator();
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
            <FormLabel>Shelf Height</FormLabel>
            <Slider
              sx={{
                width: "200px",
              }}
              min={150}
              max={800}
              value={shelfHeight}
              onChange={(e) => setshelfHeight(e.target.value)}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Box>

        <Box className="glass" p={3}>
          <FormControl>
            <FormLabel>Shelf Width</FormLabel>
            <Slider
              sx={{
                width: "200px",
              }}
              min={50}
              max={200}
              value={shelfWidth}
              onChange={(e) => setShelfWidth(e.target.value)}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Box>
        
        <Box className="glass" p={3}>
          <FormControl>
            <FormLabel>Shelf Detph</FormLabel>
            <Slider
              sx={{
                width: "200px",
              }}
              min={50}
              max={150}
              value={shelfDetph}
              onChange={(e) => setShelfDetph(e.target.value)}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Box> */}
        
        <Box className="glass" p={3}>
          <FormControl>
            <FormLabel>Shelf Color</FormLabel>
            <RadioGroup
              value={tuColor}
              onChange={(e) => setTuColor(e.target.value)}
            >
              {/* <FormControlLabel
                value={"#CECECE"}
                control={<Radio />}
                label="Black"
              /> */}
              <FormControlLabel
                value={"#ECECEC"}
                control={<Radio />}
                label="White"
              />
              <FormControlLabel
                value={"#C9BD71"}
                control={<Radio />}
                label="Brown"
              />
                <FormControlLabel
                  value={"#C9A3B9"}
                  control={<Radio />}
                  label="Pink Gold"
                />
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
