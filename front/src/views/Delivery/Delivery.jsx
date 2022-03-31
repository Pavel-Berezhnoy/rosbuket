import React from "react";

function Delivery(props) {
    return (
        <div className="catalog">
            <h2 className="about__title">Доставка</h2>
            <div className="container mt-16">
                <div className="grid-cols-3 grid gap-8">
                    <div className="">
                        <img className="w-16 mb-4" src={`${process.env.REACT_APP_DOMAIN}/images/48fc4a3ef55cd540bac3b54c9a30129d.png`} alt="" />
                        <h3 className="text-2xl">Лично в руки</h3>
                        <p className="text-base mt-4">Заказ передается получателю лично руки и в случае его отсутствия не может быть оставлен у соседей без согласования с отправителем.</p>
                    </div>
                    <div className="">
                        <img className="w-16 mb-4" src={`${process.env.REACT_APP_DOMAIN}/images/7b529ec79bc1a2280f529604a6d90b85.png`} alt="" />
                        <h3 className="text-2xl">Прием заказов с 8:00 до 23:00</h3>
                        <p className="text-base mt-4">Обработка заказов осуществляется в дневное время, однако доставку мы осуществляем круглосуточно.</p>
                    </div>
                    <div className="">
                        <img className="w-16 mb-4" src={`${process.env.REACT_APP_DOMAIN}/images/1cf796305d72a61efc8a4777696cf07a.png`} alt="" />
                        <h3 className="text-2xl">Доставка в соседние города</h3>
                        <p className="text-base mt-4">Осуществляем доставку цветов во все районы города Ростова-на-Дону, а так же в Ростовскую область</p>
                    </div>
                    <div className="">
                        <img className="w-16 mb-4" src={`${process.env.REACT_APP_DOMAIN}/images/bd6b27df2743de033f662f1e40c7fbcc.png`} alt="" />
                        <h3 className="text-2xl">Доставка до места работы</h3>
                        <p className="text-base mt-4">Если адресом доставки указан офис, мы не можем гарантировать доставку к кабинету, так как курьеру могут отказать в доступе к рабочему месту.</p>
                    </div>
                    <div className="">
                        <img className="w-16 mb-4" src={`${process.env.REACT_APP_DOMAIN}/images/b8691f6f6a3961eb4d7a14b21a424c8f.png`} alt="" />
                        <h3 className="text-2xl">Эффект сюрприза</h3>
                        <p className="text-base mt-4">По желанию, вы можете указать, чтобы мы не сообщали получателю о том, что это доставка цветов, а так же сохранили анонимность отправителя</p>
                    </div>
                    <div className="">
                        <img className="w-16 mb-4" src={`${process.env.REACT_APP_DOMAIN}/images/6b4dcd70c22396516ae371aa643b290a.png`} alt="" />
                        <h3 className="text-2xl">Срочная доставка</h3>
                        <p className="text-base mt-4">Срочная доставка в Ростове-на-Дону в течение 2 часов (необходимо уточнить возможность срочной доставки цветов по телефону)</p>
                    </div>
                </div>
            </div>
            <div className="w-full mt-8 border-solid border-slate-700 border-x-2">
                <div className="border-solid border-slate-700 border-y-2"><h2 className="text-2xl font-bold p-4">Курьер приехал вовремя, а получателя нет на месте? </h2></div>
                <div><p className="p-4 text-lg">Мы сразу позвоним Вам, чтобы попытаться решить проблему. По регламенту курьер будет ждать 15 минут. Если получатель так и не пришел, мы свяжемся с вами, чтобы определить время повторного выезда курьера.
                    <br /><br />
                    Повторный выезд курьера — платный. Если вы решите перенести доставку на другой день, когда цветы перестанут быть свежими, то вам необходимо будет оплатить новый букет.
                    <br /><br />
                    Чтобы все прошло идеально — заранее спланируйте дату, время и место вручения букета.</p>
                </div>
                <div className="border-solid border-slate-700 border-y-2"><h2 className="text-2xl font-bold p-4">Если букет не удалось доставить из-за препятствия (закрытая дверь, контрольно-пропускная система)? </h2></div>
                <div><p className="p-4 text-lg">Если вы не предупредили нас заранее о возможных препятствиях, существует вероятность повторной доставки.
                    <br /><br />
                    Чтобы избежать подобной ситуации, пожалуйста, в поле комментарии к доставке указывайте особенности доступа: код домофона, наличие контрольно-пропускной системы и т.п.
                </p>
                </div>
                <div className="border-solid border-slate-700 border-y-2"><h2 className="text-2xl font-bold p-4">Курьер приехал вовремя, а получателя нет на месте? </h2></div>
                <div className="border-solid border-slate-700 border-b-2"><p className="p-4 text-lg">Обнаружив ошибку курьер сразу свяжется с Вами и постарается доставить по новому адресу. В особых случаях может потребоваться оплата повторной доставки.</p>
                </div>
            </div>
        </div>
    );
}

export default Delivery;