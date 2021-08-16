const checkStringMatch = (originString: string, checkerString: string): boolean =>
    originString.toLowerCase().includes(checkerString.toLowerCase());

export default checkStringMatch;
