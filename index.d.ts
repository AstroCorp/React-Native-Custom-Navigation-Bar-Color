declare module "react-native-custom-navigation-bar-color" {
    function changeNavigationBarColor(color: string, light: boolean, animated: boolean): void;
    function hideNavigationBar(): boolean;
    function showNavigationBar(): boolean;

    export default changeNavigationBarColor;
    export { hideNavigationBar, showNavigationBar };
}
