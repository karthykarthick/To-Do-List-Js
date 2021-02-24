import Project from '../components/Project'

describe('Project class', () => {
  const newProject = new Project('project1');

  it('newProject should have the name given', () => {
    expect(newProject.name).toEqual('project1')
  })

  it('should not have a different name than the given', () => {
    expect(newProject.name).not.toEqual('wron name')
  });
})