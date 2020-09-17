import React from 'react';
import s from './FormsControls.module.css';

export const Element = Element => ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={ s.formControl + ' ' + (hasError ? s.error : '') }>
      <Element {...input} {...props} />
      { hasError && <span> { meta.error } </span> }
    </div>
  );
};

//{input, meta, ...props} - rest operator - пропсы будут содержать все кроме инпута и меты
// export const Textarea = ({input, meta, ...props}) => {
//   const hasError = meta.touched && meta.error;
//   return (
//     <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
//       <div>
//         <textarea {...input} {...props}/>
//       </div>
//       { hasError && <span>{ meta.error }</span> }
//     </div>
//   )
// }

// export const Input = ({input, meta, ...props}) => {
//   const hasError = meta.touched && meta.error;
//   return (
//     <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
//       <div>
//         <textarea {...input} {...props}/>
//       </div>
//       { hasError && <span>{ meta.error }</span> }
//     </div>
//   )
// }
