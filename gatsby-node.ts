// eslint-disable-next-line no-unused-vars
import type {GatsbyNode} from 'gatsby';

export const onCreateBabelConfig: GatsbyNode['onCreateBabelConfig'] = ({actions}) => {
    actions.setBabelPlugin({
        name: '@babel/plugin-transform-react-jsx',
        options: {
            runtime: 'automatic',
        },
    });
};

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({actions, getConfig}) => {
    const config = getConfig();
    const miniCssExtractPlugin = config.plugins.find(
        (plugin: any) => plugin.constructor.name === 'MiniCssExtractPlugin',
    );

    if (miniCssExtractPlugin) {
        miniCssExtractPlugin.options.ignoreOrder = true;
    }

    actions.replaceWebpackConfig(config);
};
