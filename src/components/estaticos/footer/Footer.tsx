import { Grid, Box, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Footer.css"

function Footer() {

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className="bgColorBox1">
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className="tituloFooter">Siga-nos nas Redes Sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/jhonatannsiqueira" target="_blank">
                                <GitHubIcon className="redeSocial" />
                            </a>
                            <a href="https://www.instagram.com/jhonatannsiqueira/" target="_blank">
                                <InstagramIcon className="redeSocial" />
                            </a>
                            <a href="https://www.linkedin.com/in/jhonatannsiqueira/" target="_blank">
                                <LinkedInIcon className="redeSocial" />
                            </a>
                        </Box>
                    </Box>
                    <Box className="bgColorBox2">
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className="tituloFooterCopy" >© 2022 Copyright: NerdDimension</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org" className="text-decoration-none">
                                <Typography variant="subtitle2" gutterBottom className="tituloFooterCopy" align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;