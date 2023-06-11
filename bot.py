from aiogram import Bot, Dispatcher, executor, types
from aiogram.types.web_app_info import WebAppInfo
from data import config

bot = Bot(token=config.BOT_TOKEN, parse_mode="HTML")
dp = Dispatcher(bot)


async def set_default_commands(dp):
    await dp.bot.set_chat_menu_button(
        menu_button=types.MenuButtonWebApp(text="Get order",
                                           web_app=WebAppInfo(
                                               url="https://ooovotetoda.github.io/junky-food-store/site/index.html"))
    )


@dp.message_handler(commands=["start"])
async def start(message: types.Message):
    kb = types.InlineKeyboardMarkup()
    kb.add(types.InlineKeyboardButton(text="Get order",
                                      web_app=WebAppInfo(
                                          url="https://ooovotetoda.github.io/junky-food-store/site/index.html"))
           )
    await message.answer(text="<b>Welcome to Junky Food store bot 🍕</b>\n\n"
                              "Click the button below to order some food!", reply_markup=kb)


@dp.message_handler(commands=["reply"])
async def start(message: types.Message):
    kb = types.ReplyKeyboardMarkup(resize_keyboard=True)
    kb.add(
        types.KeyboardButton(text="Get order",
                             web_app=WebAppInfo(url="https://ooovotetoda.github.io/junky-food-store/site/index.html")))
    await message.answer(text="Click the button below to order 🍕", reply_markup=kb)


if __name__ == '__main__':
    executor.start_polling(dp, on_startup=set_default_commands)
