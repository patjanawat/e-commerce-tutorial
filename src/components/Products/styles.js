import { makeStyles,alpha } from "@material-ui/core";

export default makeStyles((them)=>({
    toolbar: them.mixins.toolbar,
    content:{
        flexGrow:1,
        backgroundColor: them.palette.background.default,
        padding: them.spacing(3)
    },
    root:{
        flexGrow:1
    }
}))