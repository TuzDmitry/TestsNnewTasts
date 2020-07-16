import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Rating} from "./Rating";
import {RaitingValueType} from "../../App";

export default {
    title: 'RaringStories',
    component: Rating,
};

export const EmptyRating = () => <Rating value={0} onClick={a => a}/>;
export const Rating2 = () => <Rating value={2} onClick={a => a}/>;
export const Rating3 = () => <Rating value={3} onClick={a => a}/>;
export const Rating4 = () => <Rating value={4} onClick={a => a}/>;

export const RatingChanging = () => {
    let [ratingValue, setRaitingValue] = useState<RaitingValueType>(0)
    return <Rating value={ratingValue} onClick={setRaitingValue}/>
};
