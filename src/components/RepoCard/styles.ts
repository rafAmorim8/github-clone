import styled, { css } from 'styled-components';
import { RiBookmarkLine, RiStarLine } from 'react-icons/ri';
import { AiOutlineFork } from 'react-icons/ai';

export const Container = styled.div`

`;

export const TopSide = styled.div`

`;

export const BottomSide = styled.div`

`;

const iconCss = css`
  width: 16px;
  height: 16px;
  color: var(--icon);
  flex-shrink: 0;
`;

export const RepoIcon = styled(RiBookmarkLine)`
  ${iconCss}
`;

export const StarIcon = styled(RiStarLine)`
  ${iconCss}
`;

export const ForkIcon = styled(AiOutlineFork)`
  ${iconCss}
`;

