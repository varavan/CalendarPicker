import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import { Utils } from './Utils';
import Controls from './Controls';

export default function HeaderControls(props) {
  const {
    styles,
    currentMonth,
    currentYear,
    onPressNext,
    onPressPrevious,
    months,
    previousTitle,
    nextTitle,
    textStyle,
  } = props;
  const MONTHS = months? months : Utils.MONTHS; // English Month Array
  // getMonth() call below will return the month number, we will use it as the
  // index for month array in english
  const previous = previousTitle ? previousTitle : 'Previous';
  const next = nextTitle ? nextTitle : 'Next';
  const month = MONTHS[currentMonth];
  const year = currentYear;



  return (
    <View style={styles.headerWrapper}>
        <TouchableOpacity
          onPress={onPressPrevious}
          style={{height'100%', justifyContent: 'center', flexDirection: 'column'}}
        >
          <Image
            source={{uri: 'http://d14ytx3y0vrgcc.cloudfront.net/icArrowLeft.png'}}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      
      <View>
        <Text style={[styles.monthLabel, textStyle]}>
           { month } { year }
        </Text>
      </View>
      <TouchableOpacity
        onPress={onPressNext}
        style={{height'100%', justifyContent: 'center', flexDirection: 'column'}}
      >
        <Image
          source={{uri: 'http://d14ytx3y0vrgcc.cloudfront.net/icArrowRight.png'}}
          style={{ width: 24, height: 24 }}
        />
      </TouchableOpacity>
    </View>
  );
}

HeaderControls.propTypes = {
  currentMonth: PropTypes.number,
  currentYear: PropTypes.number,
  onPressNext: PropTypes.func,
  onPressPrevious: PropTypes.func,
};
