interface IuseNavProps {
  ref: React.RefObject<HTMLInputElement>;
}

export function useNavScroll({ ref }: IuseNavProps) {
  const onScroll = () => {
    let prevScrollPos = window.pageYOffset;
    window.addEventListener('scroll', () => {
      const currentScrollPos = window.pageYOffset;

      if (ref) {
        const { current } = ref;

        if (prevScrollPos > currentScrollPos) {
          current!.style.top = '0';
        }

        if (prevScrollPos <= currentScrollPos) {
          current!.style.top = '-50px';
        }

        prevScrollPos = currentScrollPos;
      }
    });
  };

  return { onScroll };
}
