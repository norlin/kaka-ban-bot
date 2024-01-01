import TelegramBot from 'node-telegram-bot-api'
import { config } from './config.js'

const bot = new TelegramBot(config.token, {polling: true});



bot.on("polling_error", console.log);