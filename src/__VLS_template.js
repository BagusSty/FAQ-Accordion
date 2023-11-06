import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './App.vue.js';

function __VLS_template() {
let __VLS_ctx!: InstanceType<import('./__VLS_types.js').PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_localComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption & typeof __VLS_ctx;
let __VLS_otherComponents!: typeof __VLS_localComponents & import('./__VLS_types.js').GlobalComponents;
let __VLS_own!: import('./__VLS_types.js').SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; }) >;
let __VLS_components!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_templateComponents!: {};
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex justify-center items h-screen"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("max-w-screen-lg mx-auto m-4 bg-white shadow-lg rounded-lg p-8 text-center flex justify-center items-center"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex-1"), };
{
({} as JSX.IntrinsicElements).img;
(__VLS_x as JSX.IntrinsicElements)['img'] = { width: ("50%"), src: ("images/illustration-woman-online-desktop.svg"), alt: (""), };
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("ml-4 flex-1"), };
{
({} as JSX.IntrinsicElements).h1;
({} as JSX.IntrinsicElements).h1;
(__VLS_x as JSX.IntrinsicElements)['h1'] = { class: ("font-bold text-left text-4xl text-veryDarkDesaturatedBlue mb-5"), };
}
for (const [faq, index] of (await import('./__VLS_types.js')).getVForSourceType(__VLS_ctx.faqs)) {
// @ts-ignore
[faqs,];
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { key: ((index)), class: ("text-veryDarkGrayishBlue mb-2"), };
type __VLS_0 = JSX.IntrinsicElements['div'];
const __VLS_1: import('./__VLS_types.js').EventObject<typeof undefined, 'click', {}, __VLS_0['onClick']> = {
click: $event => {
__VLS_ctx.toggleAnswer(index);
}
};
// @ts-ignore
[toggleAnswer,];
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex justify-between items-center"), };
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = { class: ("hover:text-softRed hover:cursor-pointer"), };
(faq.question);
}
{
({} as JSX.IntrinsicElements).img;
(__VLS_x as JSX.IntrinsicElements)['img'] = { class: ("w-2 hover:cursor-pointer"), src: ("images/icon-arrow-down.svg"), alt: (""), };
}
}
if (faq.showAnswer) {
for (const [faq, index] of (await import('./__VLS_types.js')).getVForSourceType(__VLS_ctx.faqs)) {
// @ts-ignore
[faqs,];
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { key: (('answer-' + index)), class: ("faq-answer"), };
(faq.answer);
}
}
}
}
}
{
({} as JSX.IntrinsicElements).hr;
(__VLS_x as JSX.IntrinsicElements)['hr'] = { class: ("my-2"), };
}
}
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
declare var __VLS_slots: {};
return __VLS_slots;
}
