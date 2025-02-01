import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Place from "../compunent/places/Place"

const About = () => {
    const { id } = useParams()
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [id])
    return (
        <div className="mt-[58px] my-rtl mb-10">
            <Place one={id} tow={null} />
            {id === "سياسة الاستبدال والاسترجاع"
                ?
                <div className="w-10/12 mx-auto rounded-xl border border-gray-200 p-5">
                    <h1 className="text-red-600 font-semibold text-xl opacity-60 mb-3">{id}</h1>
                    <span className="font-semibold text-neutral-800 flex mb-3">{id}</span>
                    <p className="text-gray-700 mb-2">نحرص في متجر الفضل للاتصالات على توفير تجربة مميزة مع عملائنا بحيث توفر سياسية مرنة و سهلة في حالة رغبة العميل في الاستبدال و الاسترجاع .</p>
                    <span className="font-semibold text-neutral-800 flex mb-3">سياسية عامة في الاستبدال أو الاسترجاع</span>
                    <span className="text-gray-700 flex mb-1">
                        1- مدة الاسترجاع أو الاستبدال 3 أيام من استلام البضاعة .
                    </span>
                    <span className="text-gray-700 flex mb-1">
                        2-إذا كان السبب هو عيب في المنتجات : يحق للعميل طلب الاستبدال أو الاسترجاع لعيب في المنتج أو عدم مطابقته للمواصفات المعلن عنها من خلال صفحة البيع، وفي هذه الحالة يتحمل المتجر تكلفة الشحن .
                    </span>
                    <span className="text-gray-700 flex mb-1">
                        3- أن يكون المنتج بحالته وأن يحافظ العميل على تغليف المنتج كما هو في حالته الأصلية .
                    </span>
                    <span className="text-gray-700 flex mb-1">
                        4- ألا يكون المنتج قد تلف أو أصيب بأي عيب نتيجة سوء حفظه لدى المستخدم .
                    </span>
                    <span className="text-gray-700 flex mb-1">
                        5- عدم استخدام المنتج بأي شكل من الأشكال .
                    </span>
                    <span className="text-gray-700 flex mb-1">
                        6- يتحمل العميل في حالة رغبته في الاسترجاع أو الاستبدال ( قيمة الشحن أو التوصيل ) .
                    </span>
                    <span className="text-gray-700 flex mb-1">
                        7- في حالة أن الشحن أو التوصيل مجاني و رغب العميل في الاستبدال أو الاسترجاع فإنه يتحمل تكاليف النقل .
                    </span>
                    <span className="text-gray-700 flex mb-1">
                        8- أن يكون المنتج بحالته الأصلية بحيث أن لايكون به تلف أو كسر أو ماشابه ذلك .
                    </span>
                    <span className="font-semibold text-neutral-800 flex mb-1 mt-5">لطلب الاستبدال والاسترجاع تواصل معنا :</span>
                    <span className="text-lg">0776966468</span>
                </div>
                :
                <div className="w-10/12 mx-auto rounded-xl border border-gray-200 p-5">
                    <h1 className="text-red-600 font-semibold text-xl opacity-60 mb-3">{id}</h1>
                    <p className="text-gray-700 mb-2">
                        نحن شركة الفضل للاتصالات علامة تجارية سعودية متخصصة في بيع كل مستجد بعالم التقنية ومستلزماتها تأسسنا منذ عام 2013م تسعدنا خدمتكم ،،،نخدمكم في كل المدن ونضمن لكم الجودة بأقل الأسعار . , سجل تجاري رقم: 1131307186 صادر من وزارة التجارة بالمملكة العربية السعودية .
                    </p>

                </div>}
        </div>
    )
}

export default About