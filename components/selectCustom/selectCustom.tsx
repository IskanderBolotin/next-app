"use client";
import React from "react";
import Select, { components, IndicatorsContainerProps } from "react-select";
import Iconindicator from "./icons/icon-indicator.svg";
import s from "./selectCustom.module.scss";


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

const SelectCustom: React.FC<Props> = ({options, placeholder}) => {

  const renderPlaceholder = () => {
    return <div className={s.placeholder} data-placeholder={placeholder}>{placeholder}</div>
  }

  const renderIndicator = () => {
    return (
      <span className={s.icon}>
        <Iconindicator />
      </span>
    )
  }
  return (
    <>
      <Select
        options={options}
        className={s.container}
        placeholder={renderPlaceholder()}
        components={{
          IndicatorsContainer: IndicatorsContainer
        }}
      />
    </>
  );
};
export default SelectCustom;
