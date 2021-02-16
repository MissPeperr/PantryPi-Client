import { FoodList } from './components/Food/FoodList';
import { FoodProvider } from './components/Food/FoodProvider';
import { FoodScanForm } from './components/Food/FoodScanForm';
import React from "react"
import {
  Box,
  Button,
  Heading,
  Grommet,
  ResponsiveContext,
} from 'grommet';
import { Down, Raspberry } from 'grommet-icons'
import { Navbar } from './components/NavBar/NavBar';

function App() {
  const theme = {
    global: {
      colors: {
        brand: '#228BE6',
      },
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  }

  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {
          size => (
            <Box fill>
              <Navbar>
                <Heading level='3' margin='none'>
                  Pantry Pi
                <Raspberry /></Heading>
                <Button
                  icon={<Down />}
                  onClick={() => { }}
                />
              </Navbar>
              <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                <Box flex align='center' justify='center'>
                  <FoodProvider>
                    <FoodList />
                    <FoodScanForm />
                  </FoodProvider>
                </Box>

              </Box>

            </Box>
          )
        }

      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
