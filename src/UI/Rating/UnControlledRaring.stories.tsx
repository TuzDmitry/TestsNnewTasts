import React from 'react';
import {UnControledRating} from "./UncontrolRating";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UnControledRating',
    component: UnControledRating,
};

const callback=action("set some stars")

export const UnControlRatingStars0 = () => <UnControledRating onChange={callback}/>;
export const UnControlRatingStars1 = () => <UnControledRating onChange={callback} defaultValue={1}/>;
export const UnControlRatingStars2 = () => <UnControledRating onChange={callback} defaultValue={2}/>;
export const UnControlRatingStars3 = () => <UnControledRating onChange={callback} defaultValue={3}/>;
export const UnControlRatingStars4 = () => <UnControledRating onChange={callback} defaultValue={4}/>;
export const UnControlRatingStars5 = () => <UnControledRating onChange={callback} defaultValue={5}/>;
