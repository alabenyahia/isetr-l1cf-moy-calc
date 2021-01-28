import React from 'react';
import {Checkbox, FormControlLabel, InputLabel, Paper, TextField} from "@material-ui/core";
import styled from "styled-components";


const StyledPaper = styled(Paper)`
  padding: 16px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 8px;
`;

const StyledInputLabel = styled(InputLabel)`
  margin-bottom: 8px;
  text-align: left;
`;


class Matiere extends React.Component {

    constructor(props) {
        super(props);
        this.handleCheckChange = this.handleCheckChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleCheckChange(e) {
        this.props.handleCheckChange(e.target.name);
    }

    handleTextChange(e) {
        this.props.handleTextChange(e.target.id, e.target.value);
    }

    render() {
        return (
            <StyledPaper elevation={3}>
                <StyledInputLabel htmlFor={this.props.MatIdDc}>{this.props.matName}</StyledInputLabel>
                <FormControlLabel
                    control={
                        <Checkbox checked={this.props.matCheckboxIsChecked}
                                  onChange={this.handleCheckChange}
                                  name={this.props.checkBoxId} color="primary"/>
                    } label="Un Seul Note"/>
                <StyledTextField fullWidth id={this.props.MatIdDc} type="number"
                                 onChange={this.handleTextChange}
                                 label={this.props.matCheckboxIsChecked ? 'Note' : "Note Controle"}
                                 variant="outlined"
                                 error={this.props.isMatContInvalid}
                                 helperText={this.props.isMatContInvalid ? "Note Invalide!" : ""}/>
                {
                    !this.props.matCheckboxIsChecked &&
                    <StyledTextField fullWidth id={this.props.MatIdDs} type="number"
                                     onChange={this.handleTextChange}
                                     label="Note Synthése"
                                     variant="outlined"
                                     error={this.props.isMatSynInvalid}
                                     helperText={this.props.isMatSynInvalid ? "Note Invalide!" : ""}/>
                }

            </StyledPaper>
        );
    }
}

export default Matiere;