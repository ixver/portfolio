import {RiAccountCircleFill} from "react-icons/ri";
import {FaGithubAlt} from "react-icons/fa";
import {RiMessage2Fill} from "react-icons/ri";
import {GrLinkedinOption} from "react-icons/gr";
import {RiAddFill} from "react-icons/ri";
import {RiSubtractFill} from "react-icons/ri";
import {RiLoginBoxFill} from "react-icons/ri";
import {RiLogoutBoxFill} from "react-icons/ri";
import {RiMailLine} from "react-icons/ri";

export const GithubIcon = (props) => <FaGithubAlt {...props} fontSize="2.8rem" />;
export const MessageIcon = (props) => <RiMessage2Fill {...props} fontSize="2.8rem" />;
export const MailIcon = (props) => <RiMailLine {...props} fontSize="2.8rem" />;
export const LinkedinIcon = (props) => <GrLinkedinOption {...props} fontSize="2.8rem" />;

export const AddIcon = (props) => <RiAddFill {...props} fontSize="2.8rem" />;
export const SubtractIcon = (props) => <RiSubtractFill {...props} fontSize="2.8rem" />;

export const LoginIcon = (props) => <RiAccountCircleFill {...props} fontSize="2.8rem" />;
export const LoginIcon2 = (props) => <RiLoginBoxFill {...props} fontSize="2.8rem" />;
export const LogoutIcon = (props) => <RiLogoutBoxFill props {...props} fontSize="2.8rem" />;
