import React, { ChangeEvent, useState } from "react";
import { InputLabel, Switch } from "@mui/material";
import { Color, ColorPalette } from 'a11y-theme-builder-sdk';
import { ColorShade } from './ColorShade';
import { LightModeSection } from "../pages/content/LightModeSection";
import { DarkModeSection } from "../pages/content/DarkModeSection";

interface Props {
    colorPalette: ColorPalette;
    colors: Color[];
    lightLabel: string;
    darkLabel: string;
}

export const DisplayColorPalette: React.FC<Props> = ({ colorPalette, colors, lightLabel, darkLabel }) => {

    const [_showDetails, _setShowDetails] = useState<boolean>(false);

    const handleShowDetailsChange = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
        _setShowDetails(checked);
    }

    //TODO: we should be using the colors from the color palette once
    //  we have listener support there
    if (colors && colors.length > 0) {
        return (
            <div>
                <div className="detail-info">
                    <InputLabel htmlFor='showPaletteDetails'>Show Details</InputLabel>
                    <Switch id="showPaletteDetails" checked={_showDetails} onChange={handleShowDetailsChange} />
                </div>
                <div className="top40"></div>
                <LightModeSection title={lightLabel}>
                    {colorPalette.getColors().map((color, i) => {
                        return (
                            <div key={color.name}>
                                <div className="subtitle1">{color.name}</div>
                                <div className="colorRow">
                                    {color.light.shades.map((shade, i) => {
                                        return (
                                            <ColorShade className="color-block" key={"ColorShade" + i} shade={shade} showDetails={_showDetails} showId />
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </LightModeSection>
                <DarkModeSection title={darkLabel}>
                    {colorPalette.getColors().map((color, i) => {
                        //console.log("comment=",comment)
                        return (
                            <div key={color.name}>
                                <div className="subtitle1">{color.name}</div>
                                <div className="colorRow">
                                    {color.dark.shades.map((shade, i) => {
                                        return (
                                            <ColorShade className="color-block" key={"ColorShade" + i} shade={shade} showDetails={_showDetails} showId />
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </DarkModeSection>
            </div>
        )
    } 
    else {
        return (
            <div className="row">
                Add a color in the Settings section to add colors to palette.
            </div>
        )
    }
}