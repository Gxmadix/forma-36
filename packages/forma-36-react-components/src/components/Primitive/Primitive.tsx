import React from 'react';
import type { Merge } from 'type-fest';

type MergeProps<ElementType, Props = {}> = Props &
  Merge<
    ElementType extends React.ElementType
      ? React.ComponentPropsWithRef<ElementType>
      : never,
    Props
  >;

type NarrowIntrinsic<
  ElementType
> = ElementType extends keyof JSX.IntrinsicElements ? ElementType : never;

interface ForwardRefComponent<IntrinsicElementString, OwnProps = {}>
  extends React.ForwardRefExoticComponent<
    MergeProps<
      IntrinsicElementString,
      OwnProps & { as?: IntrinsicElementString }
    >
  > {
  <
    As extends keyof JSX.IntrinsicElements = NarrowIntrinsic<IntrinsicElementString>
  >(
    props: MergeProps<As, OwnProps & { as: As }>,
  ): React.ReactElement | null;

  <As extends React.ElementType>(
    props: MergeProps<As, OwnProps & { as: As }>,
  ): React.ReactElement | null;
}

const DEFAULT_TAG = 'div';

interface PrimitiveOwnProps {
  /**
   * A selection ID used for testing purposes applied as a data attribute
   * (data-test-id)
   */
  testId?: string;
}

const Primitive = React.forwardRef(function (
  { as: Component = DEFAULT_TAG, testId = undefined, ...props },
  forwardedRef,
) {
  return <Component {...props} data-test-id={testId} ref={forwardedRef} />;
}) as ForwardRefComponent<typeof DEFAULT_TAG, PrimitiveOwnProps>;

Primitive.displayName = 'Primitive';

export default Primitive;
