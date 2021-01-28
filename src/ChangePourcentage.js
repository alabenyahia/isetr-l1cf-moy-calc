import React from 'react';
import styled from "styled-components";
import {Checkbox, FormControlLabel, Paper, TextField} from "@material-ui/core";

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

const StyledP = styled.p`
  margin-bottom: 8px;
  text-align: left;
`;


class ChangePourcentage extends React.Component {

    constructor(props) {
        super(props);
        this.handlePrcCheckChange = this.handlePrcCheckChange.bind(this);
        this.handlePrcTextChange = this.handlePrcTextChange.bind(this);
    }

    handlePrcCheckChange() {
        this.props.handlePrcCheckChange();
    }

    handlePrcTextChange(e) {
        this.props.handlePrcTextChange(e.target.id, e.target.value);
    }


    render() {
        return (
            <StyledPaper elevation={3}>
                <StyledP>
                    Les Pourcentages choisis par default sont comme suit:<br/>
                    - Devoir de controle : 40%<br/>
                    - Devoir de synthése : 60%<br/>
                    Si c'est correct veuillez clicker dans le checkbox suivant.
                    Sinon vous pouvez les changer avec le menu si dessous.
                </StyledP>


                <FormControlLabel
                    control={
                        <Checkbox checked={this.props.useDefaultPrc}
                                  onChange={this.handlePrcCheckChange}
                                  name="prc-checkbox" color="primary"/>
                    } label="Utiliser les pourcentages par default"/>
                {
                    !this.props.useDefaultPrc &&
                    <StyledTextField fullWidth id="prc-dc" type="number"
                                 onChange={this.handlePrcTextChange}
                                 label="Changer Pourcentage des DC"
                                 variant="outlined"/>
                }

                {
                    !this.props.useDefaultPrc &&
                    <StyledTextField fullWidth id="prc-ds" type="number"
                                     onChange={this.handlePrcTextChange}
                                     label="Changer Pourcentage des DS"
                                     variant="outlined"/>
                }

            </StyledPaper>
        );
    }
}

export default ChangePourcentage;