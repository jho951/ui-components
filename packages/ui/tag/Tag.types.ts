import React from 'react';

export type TagColor = 'default' | 'primary' | 'secondary' | 'danger';

export interface TagProps {
  children: React.ReactNode;
  active?: boolean;
  color?: TagColor;
}