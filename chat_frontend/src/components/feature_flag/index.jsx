import Accordian from "../accordions/index";
import RandomColor from "../random_color/index";
import StarRating from "../star_rating/index";
import TicTacToe from "../tic-tac-toe/index";

import {useContext} from 'react';
import {FeatureFlagContext} from './context';

export default function FeatureFlag() {

    const {enabledFeatures, loading} = useContext(FeatureFlagContext);

    const featuresToRender = [
        {name: 'showAccordian', component: <Accordian />},
        {name: 'showRandomColor', component: <RandomColor />},
        {name: 'showStarRating', component: <StarRating rating={10} />},
        {name: 'showTicTacToe', component: <TicTacToe />}
    ]

    if (loading) return <h1>Loading...</h1>

    function checkEnabledFlags(feature){
        return enabledFeatures[feature.name];
    }
    return (
        <>
        {featuresToRender.map((feature) => {
            if (checkEnabledFlags(feature)) return <div key={featuresToRender.name}>{feature.component}</div>;
            return null;
        })}
        </>

    )
}