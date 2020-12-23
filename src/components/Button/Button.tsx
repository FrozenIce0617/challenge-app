import React from 'react';

import { Props } from './types';
import * as Styled from './Button.style';

const Button: React.FC<Props> = (props: Props): JSX.Element => {
  const { text, ...otherProps } = props;

  return (
    <Styled.ButtonWrapper {...otherProps}>
      <Styled.ButtonText>{text}</Styled.ButtonText>
    </Styled.ButtonWrapper>
  );
};

export default Button;
