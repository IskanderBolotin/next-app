"use client";
import React from "react";
import Select, { components, IndicatorsContainerProps, ValueContainerProps } from "react-select";
import Iconindicator from "./icons/icon-indicator.svg";
import s from "./selectCustom.module.scss";
import { InputProps } from "react-select";


type selectOptionType = {
  value: string;
  label: string;
}

type Props = {
  options: selectOptionType[]
  placeholder: string;
}

const IndicatorsContainer = (
  props: IndicatorsContainerProps
) => {
  return (
    <div className={s.icon}>
      <Iconindicator />
    </div>
  );
};
const ValueContainer = (
 {
  children,
  ...props
 }: ValueContainerProps
) => {
  return (
    <components.ValueContainer {...props} className={s.valueContainer}>{children}</components.ValueContainer>
  );
};
const Input = (props: InputProps) => {
  return <components.Input {...props}  className={s.selectInput} />;
};
const SelectCustom: React.FC<Props> = ({options, placeholder}) => {

  const renderPlaceholder = () => {
    return <div className={s.placeholder} data-placeholder={placeholder}>{placeholder}</div>
  }

  return (
    <>
      <Select
        options={options}
        className={s.container}
        placeholder={renderPlaceholder()}
        components={{
          IndicatorsContainer,
          ValueContainer,
          Input
        }}
      />
    </>
  );
};
export default SelectCustom;
