import React, { useState } from 'react';
import { HeadingSection } from '../content/HeadingSection';
import { SettingsSection } from '../content/SettingsSection';
import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Tab, Tabs } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';


interface Props {
}

export const PrimaryTabsComponent: React.FC<Props> = ({ }) => {

    const [color, setColor] = useState('colored')
    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColor((event.target as HTMLInputElement).value)
    }

    const [tabValue, setTabValue] = React.useState('1');
    const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
        setTabValue(newValue);
      };
    const [tabIconsValue, setTabIconsValue] = React.useState('1');
    const handleTabIconsChange = (event: React.SyntheticEvent, newValue: string) => {
        setTabIconsValue(newValue);
    };

    const actualColor = (color == "colored") ? "primary" : color
    const textColor = (color == "black") ? "white" : "black"

    return (
        <div className="content">
            <HeadingSection title='Desktop' heading='Horizontal Primary Tabs'></HeadingSection>
            <SettingsSection>
                <FormControl>
                    <FormLabel id="available-color-radio-buttons-label">Available Colors:</FormLabel>
                    <RadioGroup
                        aria-labelledby="available-color-radio-buttons-label"
                        value={color}
                        name="available-color-radio-buttons"
                        onChange={handleColorChange}
                    >
                        <FormControlLabel value="colored" control={<Radio />} label="Colored" />
                        <FormControlLabel value="black"   control={<Radio />} label="Black" />
                        <FormControlLabel value="white"   control={<Radio />} label="White" />
                    </RadioGroup>
                </FormControl>
            </SettingsSection>
            <section>
                <h4>Standard Tabs</h4>
                <div style={{marginBottom: "32px"}}>
                    <div className="caption">Tab Bar</div>
                    <Box sx={{ bgcolor: actualColor }}>
                        <Tabs centered
                            value={tabValue}
                            onChange={handleTabChange}
                            aria-label="tab bar"
                            sx={{
                                "& button": {backgroundColor: actualColor, color: textColor},
                                "& button:hover": {backgroundColor: actualColor, color: textColor},
                                "& button:focus": {backgroundColor: actualColor, color: textColor},
                            }}
                        >
                            <Tab label="Tab 1" value="1" />
                            <Tab label="Tab 2" value="2" />
                            <Tab label="Tab 3" value="3" />
                            <Tab label="Tab 4" value="4" />
                        </Tabs>
                    </Box>
                </div>
                <div className="caption">Tab Bar - with Icons</div>
                <Box sx={{ bgcolor: actualColor }}>
                    <Tabs centered
                        value={tabIconsValue}
                        onChange={handleTabIconsChange}
                        aria-label="tab bar with icons"
                        sx={{
                            "& button": {backgroundColor: actualColor, color: textColor},
                            "& button:hover": {backgroundColor: actualColor, color: textColor},
                            "& button:focus": {backgroundColor: actualColor, color: textColor},
                        }}
                    >
                        <Tab label="Tab 1" value="1" icon={<BarChartIcon />} iconPosition="start"/>
                        <Tab label="Tab 2" value="2" icon={<BarChartIcon />} iconPosition="start"/>
                        <Tab label="Tab 3" value="3" icon={<BarChartIcon />} iconPosition="start"/>
                        <Tab label="Tab 4" value="4" icon={<BarChartIcon />} iconPosition="start"/>
                    </Tabs>
                </Box>
            </section>
        </div>
    )
}