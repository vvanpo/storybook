import baseGenerator, { Generator } from '../generator';
import { StoryFormat } from '../../project_types';

const generator: Generator = async (npmOptions, options) => {
  baseGenerator(npmOptions, options, 'mithril', {
    dirname: options.storyFormat === StoryFormat.MDX ? __dirname : undefined,
  });
};

export default generator;