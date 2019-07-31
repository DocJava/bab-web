import React from 'react';
import {Card} from 'antd';
import {displayModal, selectCourtNumber} from "../../actions";
import {useDispatch} from "react-redux";

export default function CourtSelect({ court }) {
    const dispatch = useDispatch();

    const handleSelection = () => {
        dispatch(selectCourtNumber(court));
        dispatch(displayModal("courtEditModal"));
    };

    return (
        <Card className="m-3"
              size="small"
              type="inner"
              title={`Court ${court.courtNumber}`}
              onClick={handleSelection}>

            {court.time}
        </Card>
    )
}