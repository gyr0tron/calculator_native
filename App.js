/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, Button, TouchableOpacity, View } from 'react-native';

export default class App extends Component {
	constructor() {
		super();
		this.state = {};
	}

  buttonPressed(text) {
    console.log('Num: ', text);
  }

	render() {

    let rows = []
    let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']]
		for (let i = 0; i < 4; i++) {
      let row = []
			for (let j = 0; j < 3; j++) {
        row.push(
          <TouchableOpacity onPress={() => this.buttonPressed(nums[i][j])} style={styles.btn}>
            <Text style={styles.btnText}>{nums[i][j]}</Text>
          </TouchableOpacity>
        )
      }
      rows.push(<View style={styles.row}>{row}</View>)
    }
    
    let operations = ['+', '-', '*', '/']
    let ops = []
    for (let i = 0; i < 4; i++) {
      ops.push(
        <TouchableOpacity style={styles.btn}>
          <Text style={[styles.btnText, styles.white]}>
            {operations[i]}
          </Text>
        </TouchableOpacity>
      )
    }

		return (
			<View style={styles.container}>
				<View style={styles.result}>
					<Text style={styles.resultText}>11*11</Text>
				</View>
				<View style={styles.calculation}>
					<Text style={styles.calculationText}>121</Text>
				</View>
				<View style={styles.buttons}>
					<View style={styles.numbers}>
						{rows}
					</View>
					<View style={styles.operations}>
            {ops}
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	btn: {
		flex: 1,
		alignItems: 'center',
		alignSelf: 'stretch',
		justifyContent: 'center'
  },
  btnText: {
    fontSize: 30
  },
  white: {
    color: 'white'
  },
	resultText: {
		fontSize: 40,
		color: 'white'
	},
	calculationText: {
		fontSize: 27,
		color: 'white'
	},
	row: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	result: {
		flex: 2,
    backgroundColor: '#448AFF',
		justifyContent: 'center',
		alignItems: 'flex-end'
	},
	calculation: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-end',
    backgroundColor: '#03A9F4'
	},
	buttons: {
		flex: 7,
		flexDirection: 'row'
	},
	numbers: {
		flex: 3,
    backgroundColor: '#FFC107'
	},
	operations: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'stretch',
		backgroundColor: 'black'
	}
});
