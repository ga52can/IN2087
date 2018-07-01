"use strict";

import React from 'react';
import { TableRow, TableColumn, FontIcon, Button } from 'react-md';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {apiURL} from "../config"



export  default class ItemListRow extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {

        return (
            <tr key={this.props.key}>
                <td>{this.props.want.image}</td>
                <td colspan="2">
                    <tr> {this.props.want.title}</tr>
                    <tr> {this.props.want.descriptions}</tr>
                </td>
            </tr>

    );
    }
}
