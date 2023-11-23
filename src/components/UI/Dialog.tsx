import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  type JSX,
} from "react";

export type Handle = {
  close: () => void;
  open: () => void;
};

export type Props = Omit<JSX.IntrinsicElements["dialog"], "aria-modal">;

export const Dialog = forwardRef<Handle, Props>(
  ({ children, className, open = false, ...rest }, ref) => {
    const _ref = useRef<HTMLDialogElement>(null);

    const closeDialog = () => {
      _ref.current?.close();
    };

    const openDialog = () => {
      _ref.current?.showModal();
    };

    useImperativeHandle(
      ref,
      () => ({
        close: closeDialog,
        open: openDialog,
      }),
      [],
    );

    useEffect(() => {
      if (open) {
        openDialog();
      }
    }, [open]);

    return (
      <dialog aria-modal={true} ref={_ref} {...rest}>
        <div className={className}>{children}</div>
      </dialog>
    );
  },
);

Dialog.displayName = "Dialog";
