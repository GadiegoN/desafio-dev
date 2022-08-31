import { Button } from "@mui/material";
import styled from "styled-components";

export const ButtonC = styled(Button)`
    padding: 16px 20px;
    outline: none;
    border: none;
    border-radius: 5px;
    width: 100%;
    cursor: pointer;
    font-weight: 600;
    font-size: 18px;
    max-width: 350px;

    &:hover {
        background: #fff;
    }
`