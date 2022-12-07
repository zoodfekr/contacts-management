import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
	fullname: Yup.string("نام را درست وارد کنید").required("نام و نام خانوادگی الزامی می باشد"),
	photo: Yup.string().url("آدرس معتبر نیست"),
	mobile: Yup.number().required("شماره موبایل الزامی می باشد"),
	email: Yup.string().email("آدرس ایمیل معتبر نیست").required("آدرس ایمیل الزامی می باشد"),
	job: Yup.string().nullable().required("لطغا شفل را وارد نمائید"),
	group: Yup.string().required("انتخاب گروه الزامی می باشد"),
});


