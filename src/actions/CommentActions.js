import * as types from './actionTypes';
import * as topicService from '../service/topicService';
import {createAction} from 'redux-actions';
import markdown from 'markdown'

export const replyTopicById = createAction(types.REPLY_TOPIC , topicService.reply , ({
  topicId,
  content,
  replyId,
  user
} , resolved , rejected) => {
  resolved();
  return {
    topicId,
    content : markdown.parse(content),
    replyId,
    user
  }
})

export const getTopicDetail = createAction(types.GET_TOPIC_DETAIL , topicService.getReply ,(id) =>{
  return {
    id
  }
})
