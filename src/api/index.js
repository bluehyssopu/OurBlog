import { LoginBlog } from "./Login";
import { requestArticle } from "./article";
import { Onesay } from "./onesay.js";
import { timeLine } from "./timeline";
import { register } from "./register";
import { logout } from "./logout";
import { classify } from "./classify";
import {follow} from './follow.js'
import {followUser} from './follow.js'
import {unfollowUser} from './follow.js'
import { load } from "./load";
import { updateUser } from "./updateUser";
export const LoginBlogApi = LoginBlog;
export const requestArticleApi = requestArticle;
export const OnesayApi = Onesay;
export const timeLineApi = timeLine;
export const registerApi = register;
export const logOutApi = logout;
export const classifyApi = classify;
export const followApi = follow;
export const followUserApi = followUser;
export const unfollowUserApi = unfollowUser;
export const loadApi = load;
export const updateUserApi = updateUser;