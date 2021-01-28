import React from 'react';
import styled from "styled-components";
import {
    Container,
    Grid,
    Button,
    Icon,
    Snackbar, createMuiTheme
} from "@material-ui/core";
import {StylesProvider, ThemeProvider} from '@material-ui/core/styles';
import Matiere from './Matiere';
import MoyDialog from "./MoyDialog";
import ButtonAppBar from "./ButtonAppBar";
import ChangePourcentage from "./ChangePourcentage";

const StyledContainer = styled(Container)`
  padding: 16px;
  text-align: center;
  flex: 1 0 auto;
`;

const StyledButton = styled(Button)`
  margin: 16px 0;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const StyledFooter = styled.footer`
  background-color: #941b6f;
  padding: 20px;
  text-align: center;
  color: white;
`;

const darkTheme = createMuiTheme({
    palette: {
        primary: {
            light: "#b32086",
            main: "#941b6f",
            dark: "#470935"
        }
    },
});


class MainWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            matiere: {
                manag__s1: {
                    matName: "Management Des Organisations",
                    isChecked: false,
                    noteControle: "",
                    noteSynthese: "",
                    isControleInvalid: false,
                    isSyntheseInvalid: false,
                    coef: 2
                },
                eco__s1: {
                    matName: "Economie Générale 1",
                    isChecked: false,
                    noteControle: "",
                    noteSynthese: "",
                    isControleInvalid: false,
                    isSyntheseInvalid: false,
                    coef: 2
                },
                dr_comm__s1: {
                    matName: "Droit Commercial",
                    isChecked: false,
                    noteControle: "",
                    noteSynthese: "",
                    isControleInvalid: false,
                    isSyntheseInvalid: false,
                    coef: 1.5
                },
                math_fin__s1: {
                    matName: "Mathématiques Financiéres",
                    isChecked: false,
                    noteControle: "",
                    noteSynthese: "",
                    isControleInvalid: false,
                    isSyntheseInvalid: false,
                    coef: 1
                },
                comp__s1: {
                    matName: "Comptabilité Financiére 1",
                    isChecked: false,
                    noteControle: "",
                    noteSynthese: "",
                    isControleInvalid: false,
                    isSyntheseInvalid: false,
                    coef: 2.5
                },
                math_gest__s1: {
                    matName: "Mathématiques De Gestion",
                    isChecked: false,
                    noteControle: "",
                    noteSynthese: "",
                    isControleInvalid: false,
                    isSyntheseInvalid: false,
                    coef: 1.5
                },
                stat__s1: {
                    matName: "Statistiques Descriptives",
                    isChecked: false,
                    noteControle: "",
                    noteSynthese: "",
                    isControleInvalid: false,
                    isSyntheseInvalid: false,
                    coef: 2
                },
                comm__s1: {
                    matName: "Habilité En Communication 1",
                    isChecked: false,
                    noteControle: "",
                    noteSynthese: "",
                    isControleInvalid: false,
                    isSyntheseInvalid: false,
                    coef: 1
                },
                dr_hom__s1: {
                    matName: "Droit De L'homme",
                    isChecked: false,
                    noteControle: "",
                    noteSynthese: "",
                    isControleInvalid: false,
                    isSyntheseInvalid: false,
                    coef: 0.5
                },
                cert__s1: {
                    matName: "Certification C2N",
                    isChecked: false,
                    noteControle: "",
                    noteSynthese: "",
                    isControleInvalid: false,
                    isSyntheseInvalid: false,
                    coef: 1
                }
            },
            showDialog: false,
            showToast: false,
            showPrcToast: false,
            pourcentageControle: 40,
            pourcentageSynthese: 60,
            useDefaultPrc: true,
            showPrcBtnClicked: false,
            moy: null
        }

        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
        this.handleCalcClick = this.handleCalcClick.bind(this);
        this.handleDialogClose = this.handleDialogClose.bind(this);
        this.calcMoy = this.calcMoy.bind(this);
        this.handleToastClose = this.handleToastClose.bind(this);
        this.handlePrcToastClose = this.handlePrcToastClose.bind(this);
        this.handlePrcCheckChange = this.handlePrcCheckChange.bind(this);
        this.handlePrcTextChange = this.handlePrcTextChange.bind(this);
        this.handlePrcBtnClick = this.handlePrcBtnClick.bind(this);


    }

    calcMoy() {
        let moye = 0;
        let divider = 0;
        for (let prop in this.state.matiere) {
            divider += parseFloat(this.state.matiere[prop].coef);
            if (this.state.matiere[prop].noteControle.length <= 0 || this.state.matiere[prop].isControleInvalid) return false;


            if (!this.state.matiere[prop].isChecked) {
                if (this.state.matiere[prop].noteSynthese.length <= 0 || this.state.matiere[prop].isSyntheseInvalid) return false;

                moye += (((parseFloat(this.state.matiere[prop].noteControle) * this.state.pourcentageControle) +
                    (parseFloat(this.state.matiere[prop].noteSynthese) * this.state.pourcentageSynthese)) / 100) * parseFloat(this.state.matiere[prop].coef);

            } else {
                moye += (parseFloat(this.state.matiere[prop].noteControle) * parseFloat(this.state.matiere[prop].coef));
            }
        }
        return moye / divider;
    }

    handlePrcCheckChange() {
        const prevVal = this.state.useDefaultPrc;
        if (!prevVal) {
            this.setState({useDefaultPrc: !prevVal, pourcentageControle: 40, pourcentageSynthese: 60});
        }
        else this.setState({useDefaultPrc: !prevVal});
    }

    handlePrcTextChange(id, val) {
        val = parseInt(val) || 0;
        if (id ==='prc-dc') this.setState({pourcentageControle: val});
        else this.setState({pourcentageSynthese: val});
    }

    handleCheckboxChange(name) {
        const mat = {...this.state.matiere};
        let checkboxName = name;
        checkboxName = checkboxName.replace('-checked', '');
        checkboxName = checkboxName.replace('--', '__');
        checkboxName = checkboxName.replace('-', '_');
        mat[checkboxName].isChecked = !this.state.matiere[checkboxName].isChecked;
        this.setState({matiere: mat});
    }

    handleTextFieldChange(id, value) {
        const mat = {...this.state.matiere};
        let targetId = id.toString();
        if (targetId.indexOf('--dc') >= 0) {
            targetId = targetId.replace('--dc', '');
            targetId = targetId.replace('--', '__');
            targetId = targetId.replace('-', '_');
            mat[targetId].noteControle = value;
            mat[targetId].isControleInvalid = (parseFloat(value) < 0 || parseFloat(value) > 20);
        } else {
            targetId = targetId.replace('--ds', '');
            targetId = targetId.replace('--', '__');
            targetId = targetId.replace('-', '_');
            mat[targetId].noteSynthese = value;
            mat[targetId].isSyntheseInvalid = (parseFloat(value) < 0 || parseFloat(value) > 20);
        }
        this.setState({matiere: mat});
    }

    handlePrcBtnClick() {
        const prevState = this.state.showPrcBtnClicked;
        this.setState({showPrcBtnClicked: !prevState});
    }

    handleCalcClick() {
        let moye = this.calcMoy();
        if (moye) {
            if ((parseInt(this.state.pourcentageControle) + parseInt(this.state.pourcentageSynthese)) === 100)
                this.setState({showDialog: true, showToast: false, showPrcToast: false ,moy: moye});
            else
                this.setState({showDialog: false, showToast: false, showPrcToast: true, moy: null});
        } else {
            this.setState({showDialog: false, showToast: true, showPrcToast: false, moy: null});
        }
    }

    handleDialogClose() {
        this.setState({showDialog: false});
    }

    handleToastClose() {
        this.setState({showToast: false});
    }
    handlePrcToastClose() {
        this.setState({showPrcToast: false});
    }

    render() {
        return (
            <StylesProvider injectFirst>
                <ThemeProvider theme={darkTheme}>
                    <ButtonAppBar handlePrcBtnClick={this.handlePrcBtnClick}/>
                    <StyledContainer>
                        <form autoComplete="off">
                            <Grid container spacing={2} style={{textAlign: 'left'}}>
                                {
                                    this.state.showPrcBtnClicked &&
                                    <Grid item xs={12} sm={9} xl={10} style={{margin: "0 auto"}}>

                                        <ChangePourcentage useDefaultPrc={this.state.useDefaultPrc}
                                                           handlePrcCheckChange={this.handlePrcCheckChange}
                                                           handlePrcTextChange={this.handlePrcTextChange}/>
                                    </Grid>

                                }
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Matiere matName={this.state.matiere.manag__s1.matName}
                                             MatIdDc="manag--dc--s1" MatIdDs="manag--ds--s1"
                                             matCheckboxIsChecked={this.state.matiere.manag__s1.isChecked}
                                             handleCheckChange={this.handleCheckboxChange}
                                             checkBoxId="manag--s1-checked"
                                             handleTextChange={this.handleTextFieldChange}
                                             isMatContInvalid={this.state.matiere.manag__s1.isControleInvalid}
                                             isMatSynInvalid={this.state.matiere.manag__s1.isSyntheseInvalid}/>
                                </Grid>

                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Matiere matName={this.state.matiere.eco__s1.matName}
                                             MatIdDc="eco--dc--s1" MatIdDs="eco--ds--s1"
                                             matCheckboxIsChecked={this.state.matiere.eco__s1.isChecked}
                                             handleCheckChange={this.handleCheckboxChange} checkBoxId="eco--s1-checked"
                                             handleTextChange={this.handleTextFieldChange}
                                             isMatContInvalid={this.state.matiere.eco__s1.isControleInvalid}
                                             isMatSynInvalid={this.state.matiere.eco__s1.isSyntheseInvalid}/>
                                </Grid>

                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Matiere matName={this.state.matiere.dr_comm__s1.matName}
                                             MatIdDc="dr-comm--dc--s1" MatIdDs="dr-comm--ds--s1"
                                             matCheckboxIsChecked={this.state.matiere.dr_comm__s1.isChecked}
                                             handleCheckChange={this.handleCheckboxChange}
                                             checkBoxId="dr-comm--s1-checked"
                                             handleTextChange={this.handleTextFieldChange}
                                             isMatContInvalid={this.state.matiere.dr_comm__s1.isControleInvalid}
                                             isMatSynInvalid={this.state.matiere.dr_comm__s1.isSyntheseInvalid}/>
                                </Grid>

                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Matiere matName={this.state.matiere.math_fin__s1.matName}
                                             MatIdDc="math-fin--dc--s1" MatIdDs="math-fin--ds--s1"
                                             matCheckboxIsChecked={this.state.matiere.math_fin__s1.isChecked}
                                             handleCheckChange={this.handleCheckboxChange}
                                             checkBoxId="math-fin--s1-checked"
                                             handleTextChange={this.handleTextFieldChange}
                                             isMatContInvalid={this.state.matiere.math_fin__s1.isControleInvalid}
                                             isMatSynInvalid={this.state.matiere.math_fin__s1.isSyntheseInvalid}/>
                                </Grid>

                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Matiere matName={this.state.matiere.comp__s1.matName}
                                             MatIdDc="comp--dc--s1" MatIdDs="comp--ds--s1"
                                             matCheckboxIsChecked={this.state.matiere.comp__s1.isChecked}
                                             handleCheckChange={this.handleCheckboxChange} checkBoxId="comp--s1-checked"
                                             handleTextChange={this.handleTextFieldChange}
                                             isMatContInvalid={this.state.matiere.comp__s1.isControleInvalid}
                                             isMatSynInvalid={this.state.matiere.comp__s1.isSyntheseInvalid}/>
                                </Grid>

                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Matiere matName={this.state.matiere.math_gest__s1.matName}
                                             MatIdDc="math-gest--dc--s1" MatIdDs="math-gest--ds--s1"
                                             matCheckboxIsChecked={this.state.matiere.math_gest__s1.isChecked}
                                             handleCheckChange={this.handleCheckboxChange}
                                             checkBoxId="math-gest--s1-checked"
                                             handleTextChange={this.handleTextFieldChange}
                                             isMatContInvalid={this.state.matiere.math_gest__s1.isControleInvalid}
                                             isMatSynInvalid={this.state.matiere.math_gest__s1.isSyntheseInvalid}/>
                                </Grid>

                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Matiere matName={this.state.matiere.stat__s1.matName}
                                             MatIdDc="stat--dc--s1" MatIdDs="stat--ds--s1"
                                             matCheckboxIsChecked={this.state.matiere.stat__s1.isChecked}
                                             handleCheckChange={this.handleCheckboxChange} checkBoxId="stat--s1-checked"
                                             handleTextChange={this.handleTextFieldChange}
                                             isMatContInvalid={this.state.matiere.stat__s1.isControleInvalid}
                                             isMatSynInvalid={this.state.matiere.stat__s1.isSyntheseInvalid}/>
                                </Grid>

                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Matiere matName={this.state.matiere.comm__s1.matName}
                                             MatIdDc="comm--dc--s1" MatIdDs="comm--ds--s1"
                                             matCheckboxIsChecked={this.state.matiere.comm__s1.isChecked}
                                             handleCheckChange={this.handleCheckboxChange} checkBoxId="comm--s1-checked"
                                             handleTextChange={this.handleTextFieldChange}
                                             isMatContInvalid={this.state.matiere.comm__s1.isControleInvalid}
                                             isMatSynInvalid={this.state.matiere.comm__s1.isSyntheseInvalid}/>
                                </Grid>

                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Matiere matName={this.state.matiere.dr_hom__s1.matName}
                                             MatIdDc="dr-hom--dc--s1" MatIdDs="dr-hom--ds--s1"
                                             matCheckboxIsChecked={this.state.matiere.dr_hom__s1.isChecked}
                                             handleCheckChange={this.handleCheckboxChange}
                                             checkBoxId="dr-hom--s1-checked"
                                             handleTextChange={this.handleTextFieldChange}
                                             isMatContInvalid={this.state.matiere.dr_hom__s1.isControleInvalid}
                                             isMatSynInvalid={this.state.matiere.dr_hom__s1.isSyntheseInvalid}/>

                                </Grid>

                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Matiere matName={this.state.matiere.cert__s1.matName}
                                             MatIdDc="cert--dc--s1" MatIdDs="cert--ds--s1"
                                             matCheckboxIsChecked={this.state.matiere.cert__s1.isChecked}
                                             handleCheckChange={this.handleCheckboxChange} checkBoxId="cert--s1-checked"
                                             handleTextChange={this.handleTextFieldChange}
                                             isMatContInvalid={this.state.matiere.cert__s1.isControleInvalid}
                                             isMatSynInvalid={this.state.matiere.cert__s1.isSyntheseInvalid}/>
                                </Grid>

                            </Grid>
                            <StyledButton endIcon={<Icon>send</Icon>} size="large" variant="contained"
                                          color="primary" onClick={this.handleCalcClick}>Calculer</StyledButton>
                        </form>

                        {
                            this.state.moy != null &&
                            <MoyDialog handleDialogClose={this.handleDialogClose}
                                       isDialogOpen={this.state.showDialog}
                                       dialogTitle={"Votre Moyenne:"} dialogText={this.state.moy.toString()}/>
                        }

                        <Snackbar
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            open={this.state.showToast}
                            autoHideDuration={3200}
                            onClose={this.handleToastClose}
                            message="Un Des Notes Est Invalide"
                            action={
                                <Icon size="small" aria-label="close" color="inherit"
                                      onClick={this.handleToastClose}>close</Icon>
                            }
                        />

                        <Snackbar
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            open={this.state.showPrcToast}
                            autoHideDuration={3200}
                            onClose={this.handlePrcToastClose}
                            message="Somme des pourcentages doit etre 100"
                            action={
                                <Icon size="small" aria-label="close" color="inherit"
                                      onClick={this.handlePrcToastClose}>close</Icon>
                            }
                        />
                    </StyledContainer>

                    <StyledFooter>Made By Ala Ben Yahia</StyledFooter>
                </ThemeProvider>
            </StylesProvider>
        );
    }
}

export default MainWrapper;