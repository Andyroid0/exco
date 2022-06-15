import styled from 'styled-components/native';
import { useState, useMemo } from 'react';

import { Date_label, Date_time } from './text/Body';
import Divider from './Divider';
import { H2 } from './text/Headings';
import IconEnd from './svg/IconEnd';
import IconStart from './svg/IconStart';
import moment from 'moment';
import { StyleSheet, View } from 'react-native';

const Component = styled.View `
    height: 88px;
    width: 100%;
    overflow: hidden;
    margin-top: -8px;
    flex-direction: row;
`;

const Container = styled.View `
    flex: 2;
    padding-left: 24px;
    padding-top: 12px;
`;

const Row = styled.View `
    flex-direction: row;
    justify-content: space-between;
`;


const Dates_Panel = (props: { start: Date, end: Date}) => {

    // START DATE
    const [ startMonth, setStartMonth ] = useState<string|null>();
    const [ startDay, setStartDay ] = useState<string|null>();
    const [ startYear, setStartYear ] = useState<string|null>();
    const [ startTime, setStartTime ] = useState<string|null>();

    useMemo( () => {
        setStartMonth( moment(props.start.getTime()).format('MMM') );
        setStartDay( props.start.getDate().toString() );
        setStartYear( moment(props.start.getTime()).format('YYYY') );
        setStartTime( moment(props.start.getTime() ).format('h:mm a') );

    },[ props.start ]);    


    // END DATE
    const [ endMonth, setEndMonth ] = useState<string|null>( moment(props.end.getTime()).format('MMM') );
    const [ endDay, setEndDay ] = useState<string|null>();
    const [ endYear, setEndYear ] = useState<string|null>();
    const [ endTime, setEndTime ] = useState<string|null>();
    
    useMemo( () => {
        setEndMonth( moment(props.end.getTime()).format('MMM') );
        setEndDay( props.end.getDate().toString() );
        setEndYear( moment(props.end.getTime()).format('YYYY') );
        setEndTime( moment(props.end.getTime() ).format('h:mm a') );
    }, [ props.end ]);


    return(
        <Component style={ styles.bottom } >

            <Container>
                {/* START */}
                <Row>
                    <Date_label>Start Time</Date_label>
                    <IconStart style={{ marginRight: 27 }} />
                </Row>

                <H2> { startMonth } { startDay } </H2>
                <Date_time>{ startYear } ({ startTime })</Date_time>
            </Container>
            
            <Divider orientation="vertical" scale={100} />

            <Container>
                {/* END */}
                <Row>
                    <Date_label>End Time</Date_label>
                    <IconEnd style={{ marginRight: 27 }} />
                </Row>

                <H2> { endMonth } { endDay } </H2>
                <Date_time>{ endYear } ({ endTime })</Date_time>
            </Container>
            
        </Component>
    )
};

const styles = StyleSheet.create({
    bottom: {
        borderBottomColor: "#EBEEF1",
        borderBottomWidth: 1,
    }
})

export default Dates_Panel;