import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css"
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { addToken } from "../../../store/tokens/Actions";
import { toast } from "react-toastify";
import MeetingRoomOutlinedIcon from '@material-ui/icons/MeetingRoomOutlined';

function Navbar() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info("Usuário Deslogado!!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined
        });
        history.push("/logar")
    }

    return (
        <>
            <AppBar position="static" className="bgColor">
                <Toolbar variant="dense">
                    <Box width="100%" display="flex" justifyContent="space-between">
                        <Box display="flex" justifyContent="start">
                            <Link to="/home" className="text-decorator-none">
                                <Box mx={1} className="cursor">
                                    <Typography variant="h5" color="inherit">
                                        🎮NerdDimension🎮
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to="/postagens" className="text-decorator-none">
                                <Box mx={1} className="cursor">
                                    <Typography variant="h6" color="inherit">
                                        Postagens
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to="/temas" className="text-decorator-none">
                                <Box mx={1} className="cursor">
                                    <Typography variant="h6" color="inherit">
                                        Temas
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to="/atualizarTema" className="text-decorator-none">
                                <Box mx={1} className="cursor">
                                    <Typography variant="h6" color="inherit">
                                        Cadastrar um Tema
                                    </Typography>
                                </Box>
                            </Link>
                        </Box>
                        <Box mx={1} className="cursor" onClick={goLogout}>
                            <Typography variant="h6" color="inherit">
                                <MeetingRoomOutlinedIcon style={{ fontSize: 30, color: "white" }} />
                            </Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;